import Link from "next/link";

export default function CustomServerError() {
  return (
    <>
      <title>Service interruption | Bleoris</title>
      <main
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 82% 12%, rgb(167 139 250 / 0.16), transparent 32rem), radial-gradient(circle at 12% 88%, rgb(78 225 193 / 0.13), transparent 28rem), #f8fafc",
          boxSizing: "border-box",
          color: "#315b7a",
          display: "flex",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          inset: 0,
          justifyContent: "center",
          minHeight: "100vh",
          overflow: "auto",
          padding: "24px",
          position: "fixed",
        }}
      >
        <section
          aria-labelledby="server-error-title"
          style={{
            background: "rgb(255 255 255 / 0.9)",
            border: "1px solid #e2e6ef",
            borderRadius: "24px",
            boxShadow:
              "0 1px 2px rgb(49 91 122 / 0.05), 0 20px 60px rgb(61 103 203 / 0.12)",
            boxSizing: "border-box",
            maxWidth: "640px",
            padding: "clamp(32px, 7vw, 64px)",
            textAlign: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              color: "#3d67cb",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Bleoris system notice
          </p>
          <h1
            id="server-error-title"
            style={{
              color: "#315b7a",
              fontSize: "clamp(32px, 7vw, 52px)",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: "20px 0 0",
            }}
          >
            Service interrupted.
          </h1>
          <p
            style={{
              color: "#526b82",
              fontSize: "17px",
              lineHeight: 1.7,
              margin: "24px auto 0",
              maxWidth: "460px",
            }}
          >
            The Bleoris experience is temporarily unavailable. You can return
            home and try again.
          </p>
          <Link
            href="/"
            style={{
              background: "linear-gradient(90deg, #3d67cb, #744fd0)",
              border: "1px solid #3d67cb",
              borderRadius: "999px",
              boxShadow: "0 12px 32px rgb(61 103 203 / 0.16)",
              boxSizing: "border-box",
              color: "#ffffff",
              display: "inline-flex",
              fontSize: "14px",
              fontWeight: 700,
              justifyContent: "center",
              marginTop: "32px",
              minHeight: "48px",
              padding: "12px 24px",
              textDecoration: "none",
            }}
          >
            Return home
          </Link>
        </section>
      </main>
    </>
  );
}
