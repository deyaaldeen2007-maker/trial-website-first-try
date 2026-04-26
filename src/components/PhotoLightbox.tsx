"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

import clsx from "clsx";

type StoryImage = {
  src: string;
  alt: string;
  caption: string;
};

type PhotoLightboxProps = {
  title: string;
  description?: string;
  images: readonly StoryImage[];
  triggerLabel: string;
  triggerVariant?: "underline" | "pill";
  className?: string;
  meta?: ReactNode;
};

export function PhotoLightbox({
  title,
  description,
  images,
  triggerLabel,
  triggerVariant = "underline",
  className,
  meta,
}: PhotoLightboxProps) {
  const dialogId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const activeImage = images[activeIndex];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (images.length > 1 && event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % images.length);
      }

      if (images.length > 1 && event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [images.length, isOpen]);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={dialogId}
        onClick={() => setIsOpen(true)}
        className={clsx(
          triggerVariant === "pill"
            ? "rounded-full border border-line px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-text transition hover:border-text hover:bg-text hover:text-canvas"
            : "text-sm font-medium text-text underline decoration-line underline-offset-4 transition hover:text-muted",
          className,
        )}
      >
        {triggerLabel}
      </button>

      {isMounted && isOpen
        ? createPortal(
            <div className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain">
              <button
                type="button"
                aria-label="Close image gallery"
                className="fixed inset-0 bg-[rgba(10,10,10,0.82)] backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />

              <div className="relative flex min-h-full items-start justify-center p-4 sm:p-6 lg:items-center">
                <div
                  id={dialogId}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={`${dialogId}-title`}
                  className="animate-slide-up relative z-[1] my-auto w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0f0f10] text-white shadow-[0_35px_120px_rgba(0,0,0,0.45)] max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)]"
                >
                  <div className="grid gap-0 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.75fr)]">
                    <div className="border-b border-white/10 p-4 sm:p-6 lg:border-b-0 lg:border-r">
                      <div className="relative h-[min(58vh,30rem)] overflow-hidden rounded-[1.5rem] bg-black/40 sm:h-[min(64vh,36rem)] lg:h-[min(76vh,48rem)]">
                        <Image
                          src={activeImage.src}
                          alt={activeImage.alt}
                          fill
                          sizes="(min-width: 1024px) 70vw, 100vw"
                          className="object-contain"
                        />
                      </div>

                      {images.length > 1 ? (
                        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {images.map((image, index) => (
                            <button
                              key={image.src}
                              type="button"
                              onClick={() => setActiveIndex(index)}
                              className={clsx(
                                "overflow-hidden rounded-[1rem] border transition",
                                activeIndex === index ? "border-white" : "border-white/10 opacity-75 hover:opacity-100",
                              )}
                              aria-label={`Open image ${index + 1}`}
                            >
                              <div className="relative aspect-[4/5] bg-black/40">
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  fill
                                  sizes="180px"
                                  className="object-cover"
                                />
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col justify-between p-6 sm:p-7">
                      <div className="space-y-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-3">
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                              Visual record
                            </p>
                            <h3
                              id={`${dialogId}-title`}
                              className="font-display text-3xl leading-tight tracking-[-0.03em]"
                            >
                              {title}
                            </h3>
                          </div>

                          <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="rounded-full border border-white/15 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition hover:border-white/50 hover:text-white"
                          >
                            Close
                          </button>
                        </div>

                        {description ? <p className="text-sm leading-7 text-white/78">{description}</p> : null}

                        <div className="rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-5">
                          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/55">Current frame</p>
                          <p className="mt-3 text-sm leading-7 text-white/82">{activeImage.caption}</p>
                          {meta ? (
                            <div className="mt-4 text-xs uppercase tracking-[0.16em] text-white/45">{meta}</div>
                          ) : null}
                        </div>
                      </div>

                      {images.length > 1 ? (
                        <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                          <button
                            type="button"
                            onClick={() => setActiveIndex((current) => (current - 1 + images.length) % images.length)}
                            className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/75 transition hover:border-white/50 hover:text-white"
                          >
                            Previous
                          </button>
                          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
                            {activeIndex + 1} / {images.length}
                          </p>
                          <button
                            type="button"
                            onClick={() => setActiveIndex((current) => (current + 1) % images.length)}
                            className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/75 transition hover:border-white/50 hover:text-white"
                          >
                            Next
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
