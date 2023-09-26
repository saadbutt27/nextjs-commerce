import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

export default function Hero({
  text1,
  text2,
  text3,
  imageSrc
}: {
  text1: string;
  text2: string;
  text3: string;
  imageSrc: StaticImageData;
}) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i }
    })
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        mass: 0.5
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        mass: 0.5
      }
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="my-10 items-center gap-y-10 bg-gray-100 px-24 py-8 lg:flex lg:flex-row lg:justify-end xl:gap-x-20"
    >
      <motion.div
        variants={container}
        className="flex-1 space-y-6 overflow-hidden"
        initial="hidden"
        animate="visible"
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div variants={child} className="text-lg font-medium uppercase text-[#009f7f]">
          Sale upto {text1}% off
        </motion.div>
        <motion.h1
          variants={child}
          className="scroll-m-20 text-4xl font-semibold tracking-wide lg:text-5xl"
        >
          Your designer {text2}
        </motion.h1>
        <motion.p variants={child} className="leading-8 [&:not(:first-child)]:mt-6">
          {text3}
        </motion.p>
        <div>
          <Link href={'#products'}>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
                mass: 0.5
              }}
              className="group mt-5 flex gap-x-2 rounded-full bg-[#009f7f] px-5 py-4 font-bold text-white shadow-md duration-300 hover:bg-black"
            >
              Shop now
              <ArrowRightIcon className="h-6 group-hover:translate-x-1 group-hover:duration-300" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
      <div className="hidden flex-1 lg:block">
        <Image src={imageSrc} alt={'Hero'} className="h-[650px] w-[500px]" />
      </div>
    </motion.section>
  );
}
