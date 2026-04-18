export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, message: "All fields are required." },
      { status: 400 }
    );
  }

  return Response.json({
    ok: true,
    message: "Message queued successfully.",
    submittedAt: new Date().toISOString()
  });
}
