import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29.99',
    description: 'Perfect for individuals and small teams',
    features: [
      'Up to 5 team members',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'API access',
      'Mobile app',
    ],
    mostPopular: false,
  },
  {
    name: 'Professional',
    price: '79.99',
    description: 'Best for growing businesses',
    features: [
      'Up to 25 team members',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Mobile app',
      'Custom integrations',
      'Advanced security',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: '199.99',
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Enterprise analytics',
      '24/7 phone support',
      'API access',
      'Mobile app',
      'Custom integrations',
      'Advanced security',
      'Dedicated account manager',
      'Custom SLA',
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id='pricing'
      className='relative px-10 py-16 sm:px-6 sm:py-20 lg:px-8'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12 text-center sm:mb-16 lg:mb-20'>
          <h2 className='mb-4 text-5xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl'>
            <span className='bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent'>
              Simple, Transparent
            </span>
            <br />
            <span className='bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
              Pricing Plans
            </span>
          </h2>
          <p className='mx-auto max-w-2xl text-base text-xl text-gray-400 sm:text-lg'>
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
          {plans.map((plan, key) => (
            <div
              key={key}
              className={`group relative flex h-full flex-col overflow-visible rounded-xl border bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 sm:rounded-2xl sm:p-8 ${
                plan.mostPopular
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className='pointer-events-none absolute inset-0 -translate-x-full -translate-y-full transform rounded-lg bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100' />
              {plan.mostPopular && (
                <div className='absolute -top-2 left-1/2 z-10 -translate-x-1/2 transform sm:-top-3'>
                  <div className='flex items-center space-x-1 rounded-full bg-linear-to-b from-blue-500 to-cyan-500 px-3 py-1 text-xs font-semibold shadow-lg sm:px-4 sm:py-1.5 sm:text-sm'>
                    <Star className='h-3 w-3 fill-white sm:h-3 sm:w-3' />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className='mb-6 text-center sm:mb-8'>
                <h3 className='mb-2 text-xl font-bold sm:text-2xl'>
                  {plan.name}
                </h3>
                <p className='mb-3 text-xs text-gray-400 sm:mb-4 sm:text-sm'>
                  {plan.description}
                </p>
                <div className='flex items-baseline justify-center'>
                  <span className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl'>
                    ${plan.price}
                  </span>
                  <span className='ml-1 text-sm text-gray-400 sm:ml-2 sm:text-base'>
                    /month
                  </span>
                </div>
              </div>

              <ul className='mb-6 flex-row space-y-3 sm:mb-8 sm:space-y-4'>
                {plan.features.map((feature, featureKey) => (
                  <li
                    key={featureKey}
                    className='flex items-start space-x-2 sm:space-x-3'
                  >
                    <div className='mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/20 sm:h-5 sm:w-5'>
                      <Check className='h-2.5 w-2.5 text-blue-400 sm:h-3 sm:w-3' />
                    </div>
                    <span className='text-sm text-gray-300 sm:text-base'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto w-full cursor-pointer rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-102 sm:px-6 sm:py-3 sm:text-base ${
                  plan.mostPopular
                    ? 'bg-linear-to-b from-blue-500 to-cyan-500'
                    : 'border border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className='mt-8 text-center sm:mt-12'>
          <p className='text-base text-xl text-gray-400'>
            Need a custom plan?{' '}
            <a
              href='#'
              className='text-blue-400 hover:text-blue-300'
            >
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
