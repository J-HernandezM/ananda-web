type OrderSummaryPageProps = {
  params: {
    state: string;
  };
};

export default function OrderSummaryPage({ params: { state } }: OrderSummaryPageProps) {
  return (
    <main>
      <section className="order-summary">
        <h1>{state}</h1>
      </section>
    </main>
  );
}
