import Card from "../components/ui/Card";

import Button from "../components/ui/Button";

import PageHeader from "../components/ui/PageHeader";

export default function PremiumPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Premium"
        subtitle="Premium imkoniyatlar"
      />

      <Card>
        <ul className="space-y-3">
          <li>✅ AI explanation</li>

          <li>✅ Unlimited tests</li>

          <li>✅ Premium arena</li>

          <li>✅ Advanced analytics</li>
        </ul>

        <Button className="mt-6 w-full">
          Premium olish
        </Button>
      </Card>
    </div>
  );
}