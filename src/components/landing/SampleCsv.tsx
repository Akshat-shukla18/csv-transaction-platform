"use client";

export default function SampleCsv() {

  return (
    <section className="mt-20">

      <h2 className="text-4xl font-bold mb-10">
        Sample CSV Structure
      </h2>

      <div
        className="
        glass-card
        rounded-[32px]
        p-8
        "
      >

<pre className="overflow-auto text-sm">

{`order_id,product_id,quantity,price,total_amount,country,phone,date,time,payment_mode
ORD001,P1001,2,100,200,India,9876543210,2024-12-12,10:30:00,Card`}

</pre>

      </div>

    </section>
  );
}