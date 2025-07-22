import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div id="" className="max_width min-h-screen">
      <section className=" rounded-md ">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold dark:text-color_4  tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto dark:text-color_4">
            Have questions or want to get in touch? We'd love to hear from you.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className=" ">
            <div className="space-y-6 ">
              <h2 className="text-2xl font-semibold mb-6 dark:text-color_4">
                Get in Touch
              </h2>

              <div className="border rounded-lg shadow-sm bg-background p-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary dark:text-color_4" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-color_4">Email</h3>
                      <a
                        href="mailto:almahdia.org@gmail.com"
                        className="text-primary hover:underline dark:text-color_4"
                      >
                        almahdia.org@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary dark:text-color_4" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-color_4">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/8801811530397"
                        className="text-primary hover:underline dark:text-color_4"
                      >
                        +880 1811530397
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary dark:text-color_4" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-color_4">Address</h3>
                      <p className="text-muted-foreground dark:text-color_4">
                        58, Champak Nagar
                        <br />
                        Rangamati Sadar, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <div className="h-[500px] mt-10 mb-40">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="dark:text-color_4"> Find Us</span>{" "}
          <span className="text-color_2">Here</span>
        </h1>
        <div className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.2637000183367!2d89.24045087370699!3d25.76185210860199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e331fc21c548ed%3A0xb855e4039804b2a2!2sRadhaballav%20Rd%2C%20Rangpur!5e0!3m2!1sen!2sbd!4v1741946539047!5m2!1sen!2sbd"
            className="w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
