import app from "./conf/app"

const PORT = process.env.PORT || 5555;

app.listen(PORT, ({ hostname, port }) => {
    console.log(`🦊 Elysia is running at http://${hostname}:${port}`);
}) 