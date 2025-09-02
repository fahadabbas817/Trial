export async function fetchTasks(search = "") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Random API error"));
        return;
      }

      const dummy = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        title: `Task ${i + 1}`,
        status: i % 2 === 0 ? "done" : "pending",
      }));

      const filtered = dummy.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
      );

      resolve(filtered);
    }, 800);
  });
}
