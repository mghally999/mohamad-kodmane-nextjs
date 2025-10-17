import Link from "next/link";

export default function Projects() {
  return (
    <main
      style={{
        backgroundColor: "#0f0f0f",
        minHeight: "100vh",
        color: "#f2f2f2",
      }}
    >
      <header
        style={{
          backgroundColor: "#1b1b1b",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(212,175,55,0.3)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/logo.jpg"
            alt="Logo"
            style={{ width: "60px", height: "60px" }}
          />
          <h1
            style={{ color: "#d4af37", fontFamily: "Playfair Display, serif" }}
          >
            Mohamad Kodmane
          </h1>
        </div>
        <nav>
          <Link
            href="/"
            style={{
              color: "#bfbfbf",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
        </nav>
      </header>

      <div
        style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}
      >
        <h1
          style={{
            color: "#d4af37",
            fontFamily: "Playfair Display, serif",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Featured Projects
        </h1>

        <section
          style={{
            background: "#1b1b1b",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "30px",
            border: "1px solid rgba(212,175,55,0.3)",
          }}
        >
          <h2 style={{ color: "#d4af37" }}>Shuba</h2>
          <p style={{ color: "#bfbfbf" }}>
            A premium villa community surrounded by nature — where modern design
            meets luxurious comfort.
          </p>
        </section>

        <section
          style={{
            background: "#1b1b1b",
            padding: "20px",
            borderRadius: "10px",
            border: "1px solid rgba(212,175,55,0.3)",
          }}
        >
          <h2 style={{ color: "#d4af37" }}>Masaar</h2>
          <p style={{ color: "#bfbfbf" }}>
            A sustainable residential destination blending technology, greenery,
            and elegance in the heart of Dubai.
          </p>
        </section>
      </div>
    </main>
  );
}
