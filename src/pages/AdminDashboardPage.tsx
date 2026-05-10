import Card from "../components/ui/Card"

import PageHeader from "../components/ui/PageHeader"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Admin"
        subtitle="Dashboard"
      />

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <p className="text-gray-500">
            Users
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
            "
          >
            0
          </h2>
        </Card>

        <Card>
          <p className="text-gray-500">
            Tests
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
            "
          >
            0
          </h2>
        </Card>
      </div>
    </div>
  );
}