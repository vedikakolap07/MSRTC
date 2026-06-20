import { Bus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              
              <h2 className="font-display text-4xl text-red-600">
                Maharashtra State Road Transport Corporation
              </h2>
            </div>

            <p className="mt-8 max-w-md text-lg text-ink-soft leading-relaxed">
              A modern intercity bus network across India. Quiet coaches,
              calmer travel.
            </p>
          </div>

          {/* Travel */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-ink-soft mb-6">
              Travel
            </h3>

            <ul className="space-y-4 text-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Bus Stands / Depots</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Achievement</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Citizens Charter</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Parcel Service</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-ink-soft mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">About</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">History</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Department</a></li>
              <li><a href="#" className="transition-colors hover:text-primary"> 150 days of service personnel program</a></li>
              <li><a href="#" className="transition-colors hover:text-primary"> 100 days of service personnel program</a></li>

            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-ink-soft mb-6">
              Support
            </h3>

            <ul className="space-y-4 text-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">e-Auction</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">e-Tender</a></li> 
 

 

              <li><a href="#" className="transition-colors hover:text-primary">Suggestions</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Grievance & Redressal</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Sitemap</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Recruitment</a></li>
 <li><a href="#" className="transition-colors hover:text-primary">e-Recruitment</a></li>
 <li><a href="#" className="transition-colors hover:text-primary">Central Office</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-sm text-ink-soft">
            © 2026 MSRTC Mobility. Crafted by Vedika · Mumbai, IN
          </p>
        </div>
      </div>
    </footer>
  );
}
       
 

 





 
