'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const blogPosts = {
  1: {
    title: 'The Truth About Career Transitions: A No-Bullshit Guide',
    date: '2024-03-15',
    author: 'Paul von Redecker',
    email: 'paulvonr@protonmail.com',
    readTime: '15 min read',
    category: 'Career',
    content: `
      Career transitions are complex, multifaceted journeys that require careful planning and execution. This guide breaks down the process into actionable steps, based on empirical evidence and real-world experience.

      Understanding the Psychology of Career Change

      Before diving into tactics, it's crucial to understand the psychological barriers that often prevent successful transitions:

      1. Status Quo Bias
      - Our natural tendency to prefer the current state
      - The comfort of known challenges vs. unknown opportunities
      - How this bias affects decision-making in career moves

      2. Imposter Syndrome in Career Transitions
      - Why experienced professionals still face self-doubt
      - Cognitive strategies to overcome imposter syndrome
      - Using past achievements as confidence anchors

      The Market Reality

      Understanding market dynamics is crucial for any career transition:

      1. Industry Analysis
      - Current market trends and growth sectors
      - Emerging roles and declining positions
      - Salary ranges and compensation structures
      - Geographic considerations and remote work opportunities

      2. Skill Mapping
      - Core competencies vs. emerging skills
      - Technical skills vs. soft skills
      - Industry-specific requirements
      - Transferable skills analysis

      Practical Implementation

      1. Research Phase (2-3 months)
      - Conduct informational interviews (minimum 20)
      - Analyze job descriptions (minimum 50)
      - Study industry reports and trends
      - Join relevant professional associations

      2. Skill Development (3-6 months)
      - Identify skill gaps through job description analysis
      - Create a learning roadmap
      - Practical project implementation
      - Documentation and portfolio building

      3. Network Development
      - Strategic networking vs. random connections
      - Building meaningful professional relationships
      - Industry event participation
      - Online presence optimization

      4. Application Strategy
      - Resume optimization techniques
      - Interview preparation framework
      - Salary negotiation strategies
      - Offer evaluation criteria

      Common Pitfalls and Solutions

      1. Analysis Paralysis
      - Signs you're overthinking the transition
      - Setting decision deadlines
      - Using data to drive decisions
      - When to trust your intuition

      2. Skill Development Traps
      - Avoiding certification collecting syndrome
      - Balancing learning with practical application
      - Creating demonstrable expertise
      - Building a portfolio of work

      3. Financial Management During Transition
      - Calculating your runway
      - Creating a transition budget
      - Managing debt and savings
      - Side hustle considerations

      4. Professional Identity Shift
      - Managing your professional brand
      - Updating your narrative
      - Building credibility in a new field
      - Handling identity-related challenges

      Measuring Progress

      1. Key Performance Indicators
      - Network growth metrics
      - Skill development milestones
      - Interview success rate
      - Salary progression

      2. Adjustment Strategies
      - Regular progress reviews
      - Strategy refinement
      - Course correction methods
      - Success metrics evaluation

      Long-term Success Strategies

      1. Continuous Learning
      - Staying current with industry trends
      - Building learning habits
      - Creating knowledge management systems
      - Professional development planning

      2. Network Maintenance
      - Regular relationship nurturing
      - Value-adding interactions
      - Professional community building
      - Mentorship opportunities

      3. Career Progression Planning
      - Setting long-term career goals
      - Creating advancement strategies
      - Building influence and expertise
      - Leadership development

      Conclusion

      Career transitions require a combination of strategic planning, practical execution, and psychological preparation. Success comes from understanding both the external market factors and internal psychological dynamics at play.

      Remember that career transitions are marathons, not sprints. Focus on sustainable progress rather than quick wins, and be prepared to adjust your strategy as you gather more information and experience.
    `,
  },
  2: {
    title: 'Financial Independence: Cut Through the Noise',
    date: '2024-03-10',
    author: 'Paul von Redecker',
    email: 'paulvonr@protonmail.com',
    readTime: '10 min read',
    category: 'Finance',
    content: `
      Let's skip the motivational quotes and get straight to what builds wealth. After years of consulting with clients across different income levels, here's what actually works:

      The Foundation:
      1. Income Optimization
      - Your salary is your biggest wealth-building tool
      - Negotiate aggressively - I'll teach you how
      - Build multiple income streams (consulting, investments, side projects)

      2. Expense Management
      - Track every dollar for 30 days (yes, every single one)
      - Cut ruthlessly on things that don't serve your goals
      - Automate your savings and investments

      3. Investment Strategy
      - Low-cost index funds are your foundation
      - Real estate for leverage and tax benefits
      - Emergency fund is non-negotiable (6 months minimum)

      Common Myths Debunked:
      - "You need to time the market" - No, you need time IN the market
      - "Real estate is the only way" - It's ONE way, not THE way
      - "You need a six-figure salary" - You need a plan and discipline

      Action Steps:
      1. Calculate your net worth today
      2. Set up automatic investments
      3. Create multiple income streams
      4. Review and rebalance quarterly

      Want a personalized financial independence plan? Book a consultation, and let's create your roadmap to financial freedom.
    `,
  },
  3: {
    title: 'Relationship Success: The Practical Framework',
    date: '2024-03-05',
    author: 'Paul von Redecker',
    email: 'paulvonr@protonmail.com',
    readTime: '12 min read',
    category: 'Relationships',
    content: `
      Forget the "just be yourself" advice. Successful relationships require strategy, understanding, and deliberate action. Here's what works:

      Core Principles:
      1. Clear Communication
      - State expectations explicitly
      - Regular check-ins (weekly minimum)
      - Address issues immediately, not when they explode

      2. Boundary Setting
      - Define your non-negotiables
      - Respect partner's space and independence
      - Learn to say no without guilt

      3. Growth Mindset
      - Individual growth is as important as couple growth
      - Set personal and shared goals
      - Regular skill development (communication, conflict resolution)

      Common Relationship Killers:
      - Avoiding difficult conversations
      - Keeping score
      - Neglecting individual growth
      - Poor financial alignment

      The Action Plan:
      1. Weekly Check-ins
      - Review the past week
      - Plan the week ahead
      - Address any concerns early

      2. Monthly Deep Dives
      - Review goals and progress
      - Discuss finances openly
      - Plan future milestones

      3. Quarterly Relationship Audit
      - Evaluate satisfaction levels
      - Adjust goals and expectations
      - Celebrate wins and address challenges

      Need help implementing this framework? Book a consultation for personalized guidance.
    `,
  },
  4: {
    title: 'Productivity That Actually Works',
    date: '2024-02-28',
    author: 'Paul von Redecker',
    email: 'paulvonr@protonmail.com',
    readTime: '7 min read',
    category: 'Personal Growth',
    content: `
      Forget the "5 AM Club" and other productivity porn. Here's what actually moves the needle, based on real results with high-performing clients:

      The Core Framework:
      1. Energy Management > Time Management
      - Track your energy levels for a week
      - Match tasks to energy states
      - Design your day around your peak hours

      2. Decision Minimization
      - Automate recurring decisions
      - Create systems for common tasks
      - Batch similar activities

      3. Focus Optimization
      - 90-minute deep work blocks
      - No-phone zones
      - Strategic use of deadlines

      The Implementation:
      Morning:
      - No phone for first hour
      - Hardest task first
      - Review daily objectives

      Afternoon:
      - Batch meetings
      - Light tasks during energy dips
      - Regular movement breaks

      Evening:
      - Review accomplishments
      - Plan next day
      - Digital sunset 1 hour before bed

      Common Productivity Myths:
      - "More hours = more output"
      - "Multitasking is effective"
      - "You need the latest productivity apps"

      Ready to 10x your productivity? Book a consultation for a personalized system.
    `,
  },
};

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts[Number(params.id) as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Floating Gradients */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <article className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to blog
        </Link>
        
        <header className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600 font-medium">{post.category}</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{post.title}</h1>
            <div className="flex items-center justify-between text-gray-600">
              <div className="flex items-center">
                <img
                  src="/avatar.jpg"
                  alt={post.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm">{post.email}</p>
                </div>
              </div>
              <div className="text-right">
                <p>{post.date}</p>
                <p className="text-sm">{post.readTime}</p>
              </div>
            </div>
          </motion.div>
        </header>

        <motion.div
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-blue-800 transition-colors duration-200"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </article>
    </div>
  );
} 