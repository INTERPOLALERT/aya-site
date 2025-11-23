'use client';

import { Heart, Sparkles, Camera, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Aya Liona</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate content creator dedicated to sharing authentic stories and creative inspiration
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-shadow p-8 md:p-12 rounded-3xl bg-white dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-pink-600" />
              <h2 className="text-3xl font-bold">My Story</h2>
            </div>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Hello! I'm Aya Liona, a content creator and artist passionate about connecting
                with people through visual storytelling and authentic expression.
              </p>
              <p>
                My journey began with a simple love for capturing moments and sharing stories.
                Over time, this passion evolved into a career where I get to inspire, create,
                and build meaningful connections with an amazing community.
              </p>
              <p>
                Through my content, I aim to bring positivity, creativity, and inspiration to
                everyone who follows along. Whether it's through photography, video content,
                or creative projects, my goal is always to create something that resonates.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Authenticity",
                description: "Being genuine and true to myself in everything I create, sharing real moments and honest stories."
              },
              {
                icon: Camera,
                title: "Creativity",
                description: "Pushing boundaries and exploring new ways to express ideas through visual content and storytelling."
              },
              {
                icon: Users,
                title: "Community",
                description: "Building meaningful connections and fostering a supportive, engaged community of followers."
              },
              {
                icon: Heart,
                title: "Passion",
                description: "Putting love and dedication into every project, always striving to deliver quality content."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-shadow p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-shadow p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 text-white"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Journey Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "100K+", label: "Followers" },
                { number: "500+", label: "Content Created" },
                { number: "50+", label: "Collaborations" },
                { number: "2M+", label: "Total Reach" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Want to collaborate or just say hello? I'd love to hear from you!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
