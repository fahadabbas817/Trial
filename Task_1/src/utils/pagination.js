import mongoose from 'mongoose';


async function buildCursorFilter({ cursorId, model, baseFilter = {} }) {
  const filter = { ...baseFilter };

  if (!cursorId) return { filter, cursorDoc: null };

  if (!mongoose.Types.ObjectId.isValid(cursorId)) {
    const err = new Error('cursor must be a valid ObjectId');
    err.status = 400;
    throw err;
  }

  const cursorDoc = await model.findById(cursorId).select('createdAt _id').lean();
  if (!cursorDoc) {
    const err = new Error('cursor not found');
    err.status = 400;
    throw err;
  }

//   for breaking ties when createdAt is the same
  filter.$or = [
    { createdAt: { $lt: cursorDoc.createdAt } },
    { createdAt: cursorDoc.createdAt, _id: { $lt: cursorDoc._id } }
  ];

  return { filter, cursorDoc };
}

export { buildCursorFilter };