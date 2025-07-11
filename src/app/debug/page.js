export default function DebugPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Environment Variables Debug
      </h1>
      <div className="space-y-2">
        <p>
          <strong>Instagram Client ID:</strong>{" "}
          {process.env.INSTAGRAM_CLIENT_ID
            ? "✅ Set"
            : "❌ NOT SET"}
        </p>
        <p>
          <strong>
            Instagram Client Secret:
          </strong>{" "}
          {process.env.INSTAGRAM_CLIENT_SECRET
            ? "✅ Set"
            : "❌ NOT SET"}
        </p>
        <p>
          <strong>NextAuth Secret:</strong>{" "}
          {process.env.NEXTAUTH_SECRET
            ? "✅ Set"
            : "❌ NOT SET"}
        </p>
        <p>
          <strong>NextAuth URL:</strong>{" "}
          {process.env.NEXTAUTH_URL ||
            "❌ NOT SET"}
        </p>
        <p>
          <strong>MongoDB URL:</strong>{" "}
          {process.env.MONGODB_URL
            ? "✅ Set"
            : "❌ NOT SET"}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">
          Next Steps:
        </h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Create a <code>.env.local</code> file
            in your project root
          </li>
          <li>
            Add the required environment variables
          </li>
          <li>Restart your development server</li>
          <li>
            Check the console logs for debug
            information
          </li>
        </ol>
      </div>
    </div>
  );
}
