export default function HomePage() {
  const supplierOffers = [
    { id: "OF-1001", material: "HMS 1", quantity: "120 MT", region: "New Jersey", price: "$338/MT", status: "Under Review" },
    { id: "OF-1002", material: "Shredded Steel", quantity: "80 MT", region: "Pennsylvania", price: "$348/MT", status: "Negotiation" },
  ];

  const priceBoard = [
    { material: "HMS 1", region: "US East", price: "$330/MT" },
    { material: "PNS", region: "US East", price: "$355/MT" },
    { material: "Shredded Steel", region: "US East", price: "$348/MT" },
    { material: "Busheling", region: "US Midwest", price: "$385/MT" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">HNSN Scrap Marketplace</h1>
              <p className="mt-2 text-sm text-slate-600">
                Simple Next.js starter page for supplier and admin workflow.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-medium">
              Starter file ready for deploy
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm text-slate-500">Active Listings</div>
            <div className="mt-2 text-3xl font-bold">12</div>
            <div className="mt-2 text-sm text-slate-600">Lots currently visible in the portal</div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm text-slate-500">Open Offers</div>
            <div className="mt-2 text-3xl font-bold">6</div>
            <div className="mt-2 text-sm text-slate-600">Offers waiting for admin review</div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm text-slate-500">Approved Suppliers</div>
            <div className="mt-2 text-3xl font-bold">34</div>
            <div className="mt-2 text-sm text-slate-600">Suppliers registered for buying and selling</div>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold">Supplier View</h2>
            <p className="mt-2 text-sm text-slate-600">
              What suppliers should be able to do in the portal.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Login",
                "Dashboard",
                "Company Profile",
                "Listings",
                "Add Listing",
                "Prices",
                "Submit Offer",
                "Offers Status",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200">
              <div className="border-b border-slate-200 px-4 py-3 font-semibold">Submitted Offers</div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      <th className="px-4 py-3">ID</th>
                      <th className="px-4 py-3">Material</th>
                      <th className="px-4 py-3">Qty</th>
                      <th className="px-4 py-3">Region</th>
                      <th className="px-4 py-3">Ask</th>
                      <th className="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supplierOffers.map((offer) => (
                      <tr key={offer.id} className="border-t border-slate-200">
                        <td className="px-4 py-3">{offer.id}</td>
                        <td className="px-4 py-3">{offer.material}</td>
                        <td className="px-4 py-3">{offer.quantity}</td>
                        <td className="px-4 py-3">{offer.region}</td>
                        <td className="px-4 py-3">{offer.price}</td>
                        <td className="px-4 py-3">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                            {offer.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold">Admin View</h2>
            <p className="mt-2 text-sm text-slate-600">
              What your internal team should manage.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Login",
                "Dashboard",
                "Price Management",
                "Offer Review",
                "Negotiation",
                "Create PO",
                "Logistics",
                "Payment Tracking",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200">
              <div className="border-b border-slate-200 px-4 py-3 font-semibold">Indicative Prices</div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      <th className="px-4 py-3">Material</th>
                      <th className="px-4 py-3">Region</th>
                      <th className="px-4 py-3">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceBoard.map((row) => (
                      <tr key={row.material + row.region} className="border-t border-slate-200">
                        <td className="px-4 py-3">{row.material}</td>
                        <td className="px-4 py-3">{row.region}</td>
                        <td className="px-4 py-3">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold">What to do next</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            <li>Create a new Next.js app.</li>
            <li>Replace the default <code>app/page.tsx</code> with this file.</li>
            <li>Push the code to GitHub.</li>
            <li>Import the GitHub repo into Vercel.</li>
            <li>Connect your GoDaddy domain to Vercel.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
