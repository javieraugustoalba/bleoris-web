"use client";

interface GlobalErrorProps {
  readonly error: Error & { digest?: string };
  readonly retry: () => void;
}

export default function GlobalError({ retry }: GlobalErrorProps) {
  return (
    <html lang="en">
      <head>
        <title>Something went wrong | Bleoris</title>
      </head>
      <body
        style={{
          background:
            "radial-gradient(circle at 82% 12%, rgb(167 139 250 / 0.16), transparent 32rem), radial-gradient(circle at 12% 88%, rgb(78 225 193 / 0.13), transparent 28rem), #f8fafc",
          color: "#315b7a",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          margin: 0,
          minHeight: "100vh",
        }}
      >
        <main
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "24px",
          }}
        >
          <section
            aria-labelledby="global-error-title"
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
              id="global-error-title"
              style={{
                color: "#315b7a",
                fontSize: "clamp(32px, 7vw, 52px)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                margin: "20px 0 0",
              }}
            >
              Something went wrong.
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
              The interruption may be temporary. Try loading the Bleoris
              experience again.
            </p>
            <button
              onClick={retry}
              style={{
                background: "linear-gradient(90deg, #3d67cb, #744fd0)",
                border: "1px solid #3d67cb",
                borderRadius: "999px",
                boxShadow: "0 12px 32px rgb(61 103 203 / 0.16)",
                color: "#ffffff",
                cursor: "pointer",
                font: "inherit",
                fontSize: "14px",
                fontWeight: 700,
                marginTop: "32px",
                minHeight: "48px",
                padding: "12px 24px",
              }}
              type="button"
            >
              Try again
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
