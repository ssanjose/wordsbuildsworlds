'use client';

import React, { useEffect } from "react"
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';
import { FaRegStar } from "react-icons/fa";
import { Spinner } from "@/components/ui/spinner";

const Hero = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const [stars, setStars] = React.useState(0)

  useEffect(() => {
    let isMounted = true
    fetch("https://api.github.com/repos/ssanjose/wordsbuildsworlds")
      .then((res) => res.json())
      .then((data) => isMounted && setStars(data.stargazers_count))
      .catch((e) => console.error(e))

    return () => { isMounted = false };
  }, [])

  return (
    <section className={cn(`flex flex-col items-center justify-center`, className)}>
      <div className="flex flex-col max-w-[64rem] gap-2 items-center justify-center text-center">
        <a
          href={siteConfig.links.github}
          className={cn(buttonVariants({ variant: "secondary", className: "rounded-3xl bg-muted hover:bg-muted/70 px-4 py-1.5 text-sm font-medium" }))}
        >
          <span>Free and open source!</span>
          <FaGithub />
        </a>
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          Words builds worlds.
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          A library of anchor words and the mental worlds they build. A practical tool to enhance lateral thinking and empathy.
        </p>
        <div className="flex gap-4">
          <a
            href="/docs"
            className={cn(buttonVariants({ variant: "default", className: "rounded-md p-4 py-4.5 text-sm font-medium transition-colors" }))}
          >
            What is Words Builds Worlds?
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            className={cn(buttonVariants({ variant: "outline", className: "rounded-md p-4 py-4.5 text-sm font-medium transition-colors" }))}
          >
            <FaRegStar className="h-4 w-4" />
            {stars === 0 ? <Spinner data-icon="inline-start" /> : stars}
            <span> on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;