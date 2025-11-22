"use client";
import Link from "next/link";
import Image from "next/image";
import { SERVICE_DATA } from "@/lib/services";

export function StoreServiceGrid() {
  return (
    <section className="bg-brand-white pb-20 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {SERVICE_DATA.map((service) => (
            <Link
              key={service.id}
              href={`/store/${service.slug}`}
              className="group"
            >
              <Image
                src={service.imageSrc}
                alt={service.title}
                width={600}
                height={450}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                priority={false}
              />
              <h3 className="font-semibold text-brand-black text-2xl mt-6">
                {service.title}
              </h3>
              <p className="text-brand-gray-dark text-lg mt-2">
                {service.description}
              </p>
              <div className="text-brand-red font-semibold mt-4 group-hover:underline">
                了解详情 →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}