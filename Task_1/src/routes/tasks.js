import express from "express";
import Task from "../models/taskModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { buildCursorFilter } from "../utils/pagination.js";

const router = express.Router();
const ALLOWED_STATUS = new Set(["todo", "doing", "done"]);
const MAX_LIMIT = 50;


router.get(
  "/",
  asyncHandler(async (req, res) => {
    //limit validation
    const rawLimit = req.query.limit;
    let limit = 10; // default limit if not specified
    if (rawLimit !== undefined) {
      limit = parseInt(rawLimit, 10);
      if (Number.isNaN(limit) || limit <= 0) {
        return res
          .status(400)
          .json({ error: "limit must be a positive integer" });
      }
      if (limit > MAX_LIMIT) {
        return res.status(400).json({ error: `limit must be <= ${MAX_LIMIT}` });
      }
    }

    // status validation
    const status = req.query.status;
    const baseFilter = {};
    if (status !== undefined && status !== "") {
      if (!ALLOWED_STATUS.has(status)) {
        return res
          .status(400)
          .json({
            error: `status must be one of ${Array.from(ALLOWED_STATUS).join(
              ","
            )}`,
          });
      }
      baseFilter.status = status;
    }

    const cursorId = req.query.cursor;

    // Build filter including cursorid
    const { filter } = await buildCursorFilter({
      cursorId,
      model: Task,
      baseFilter,
    });

  
    const sort = { createdAt: -1, _id: -1 };

    // fetch one extra to check if theres a next page
    const docs = await Task.find(filter)
      .sort(sort)
      .limit(limit + 1)
      .select("title status priority createdAt")

    let nextCursor = null;
    if (docs.length > limit) {
      nextCursor = String(docs[limit]._id);
      docs.splice(limit, 1);
    }

    res.json({ items: docs, nextCursor });
  })
);

export default router;
