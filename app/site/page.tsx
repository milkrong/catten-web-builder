import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { pricingCards } from '@/lib/constants';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="h-full w-full pt-36 relative flex flex-col items-center justify-center">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <p className="text-center">
          Welcome to the future of digital marketing
        </p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl text-center font-bold md:text-[300px]">
            Catten
          </h1>
        </div>
        <div className="flex items-center justify-center relative md:mt-[-70px]">
          <Image
            src="/assets/preview.png"
            alt="cat"
            width={1200}
            height={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted "
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-40px]">
        <h2 className="text-4xl text-center">Choose what fits your right</h2>
        <p className="text-muted-foreground text-center">
          Our Strait plans are tailored to meet your need, if you are not ready{' '}
          <br /> you can get start free
        </p>
        <div className="flex items-center gap-4 flex-wrap mt-6">
          {pricingCards.map((pricingCard) => {
            return (
              <Card
                key={pricingCard.title}
                className={clsx('w-[300px] flex flex-col justify-between', {
                  'border-2 border-primary':
                    pricingCard.title === 'Unlimited Saas',
                })}
              >
                <CardHeader>
                  <CardTitle
                    className={clsx('', {
                      'text-muted-foreground':
                        pricingCard.title !== 'Unlimited Saas',
                    })}
                  >
                    {pricingCard.title}
                  </CardTitle>
                  <CardDescription>{pricingCard.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-4xl text-bold">
                    {pricingCard.price}
                  </span>
                  <span className="text-muted-foreground">/m</span>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div>
                    {pricingCard.features.map((feature) => (
                      <div className="flex gap-2 items-center" key={feature}>
                        <Check className="text-muted-foreground" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/agency?plan=${pricingCard.priceId}`}
                    className={clsx(
                      'w-full text-center bg-primary p-2 rounded-md',
                      {
                        '!bg-muted-foreground':
                          pricingCard.title === 'Unlimited Sass',
                      }
                    )}
                  >
                    Get Started
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}
