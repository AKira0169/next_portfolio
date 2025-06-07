'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id='home' className='relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden'>
      {/* Animated Background with Squares */}
      <div className='absolute inset-0 -z-10'>
        {/* Base gradient background */}
        <div className='absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20'></div>

        {/* Animated squares */}
        <div className='absolute inset-0'>
          {/* Large squares */}
          <motion.div
            className='absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-lg'
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
          <motion.div
            className='absolute top-40 right-20 w-24 h-24 bg-primary/5 rounded-lg'
            animate={{
              rotate: [360, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute bottom-32 left-1/4 w-20 h-20 border-2 border-primary/20 rounded-lg'
            animate={{
              rotate: [0, -360],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />

          {/* Medium squares */}
          <motion.div
            className='absolute top-60 right-1/3 w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-md'
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute bottom-20 right-10 w-14 h-14 border border-primary/15 rounded-md'
            animate={{
              y: [0, -40, 0],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />

          {/* Small squares */}
          <motion.div
            className='absolute top-32 left-1/3 w-8 h-8 bg-primary/10 rounded-sm'
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute bottom-40 left-20 w-6 h-6 border border-primary/20 rounded-sm'
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
          <motion.div
            className='absolute top-1/2 right-1/4 w-10 h-10 bg-gradient-to-tr from-primary/5 to-transparent rounded-md'
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 14,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Depth layers */}
        <div className='absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40'></div>
        <div className='absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <motion.div className='flex-1 space-y-6' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
              Hi, I&apos;m <span className='text-primary'>Oday Tarek</span>
            </h1>
            <h2 className='text-3xl md:text-4xl font-semibold text-muted-foreground'>
              I&apos;m a <span className='text-primary'>{text}</span>
              <span className='animate-blink'>|</span>
            </h2>
            <p className='text-lg text-muted-foreground max-w-xl'>
              With over 3 years of experience building end-to-end web applications. I specialize in creating scalable backend systems and modern frontend interfaces using
              JavaScript, TypeScript, and cutting-edge frameworks.
            </p>
            <div className='flex flex-wrap gap-4 pt-4'>
              <Button asChild size='lg'>
                <Link href='#projects'>
                  View My Work <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <Link href='#contact'>Contact Me</Link>
              </Button>
            </div>
            <div className='flex gap-4 pt-4'>
              <Button variant='ghost' size='icon' asChild>
                <Link href='https://github.com/akira0169' target='_blank' rel='noopener noreferrer'>
                  <Github className='h-5 w-5' />
                  <span className='sr-only'>GitHub</span>
                </Link>
              </Button>
              <Button variant='ghost' size='icon' asChild>
                <Link href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'>
                  <Linkedin className='h-5 w-5' />
                  <span className='sr-only'>LinkedIn</span>
                </Link>
              </Button>
              <Button variant='ghost' size='icon' asChild>
                <Link href='mailto:contact@example.com'>
                  <Mail className='h-5 w-5' />
                  <span className='sr-only'>Email</span>
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div className='relative' initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20'>
              <Image src='/494997948_1814907906058664_4206311037266928118_n.jpg?height=320&width=320' alt='Oday Tarek' fill className='object-cover' priority />
            </div>
            {/* Glowing effect around profile image */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-xl -z-10'></div>
            <div className='absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-2xl -z-20'></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent'></div>
    </section>
  );
}
