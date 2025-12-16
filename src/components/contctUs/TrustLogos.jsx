export default function TrustedBrands() {
  return (
    <section className="w-full bg-white py-10">
      {/* Outer full-width bordered container */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="w-full border border-[#E6E6E6] rounded-2xl
                     px-6 py-8
                     flex flex-wrap md:flex-nowrap
                     items-center justify-between gap-8
                     bg-white"
        >
          {/* Google */}
          <BrandItem
            name="Google Partner"
            logo="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          />

          {/* AWS */}
          <BrandItem
            name="AWS"
            logo="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          />

          {/* Microsoft */}
          <BrandItem
            name="Microsoft"
            logo="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          />

          {/* ISO */}
          <BrandItem
            name="ISO Certified"
            logo="https://upload.wikimedia.org/wikipedia/commons/7/7b/ISO_logo.svg"
          />

          {/* Trust badge */}
          <BrandItem
            name="500+ Businesses"
            logo="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          />
        </div>
      </div>
    </section>
  );
}

function BrandItem({ logo, name }) {
  return (
    <div
      className="flex items-center gap-3
                 opacity-80 hover:opacity-100
                 transition-all duration-300"
    >
      <img
        src={logo}
        alt={name}
        className="h-8 w-auto object-contain"
      />
      <span className="text-sm font-medium text-[#4A4A4A]">
        {name}
      </span>
    </div>
  );
}
