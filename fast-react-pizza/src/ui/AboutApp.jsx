import React from 'react';

const skills = [
  {
    skill: 'React',
    level: 'advanced',
    color: 'bg-orange-400',
  },
  {
    skill: 'React-Redux',
    level: 'intermediate',
    color: 'bg-lime-400',
  },
  {
    skill: 'React-Router',
    level: 'beginner',
    color: 'bg-pink-500',
  },
  {
    skill: 'Tailwind',
    level: 'intermediate',
    color: 'bg-purple-400',
  },
  {
    skill: 'Vite',
    level: 'beginner',
    color: 'bg-green-500',
  },
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: 'bg-rose-500',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: 'bg-blue-500',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: 'bg-red-400',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: 'bg-cyan-400',
  },
];

const AboutApp = () => {
  return (
    <div className="flex flex-col  sm:flex-row">
      <div className=" flex flex-1 flex-col text-center">
        <div className="flex-auto justify-center  px-4 py-10 text-center">
          <p className=" text-xl font-semibold text-yellow-500 md:text-3xl">
            This application is made by <br />
            <a
              href="https://www.linkedin.com/in/satbir007/"
              className=" text-stone-900 underline"
            >
              Satbir Singh 🚀
            </a>
          </p>
        </div>
        <div className="flex-auto ">
          <p className=" mb-6 text-xl font-semibold text-stone-900 md:text-3xl">
            Tech Stack Used
          </p>
          <SkillList />
        </div>
      </div>
      <div className="m-4 flex-1  sm:border-l-4 sm:border-yellow-400">
        <h4 className="my-8 text-center text-xl font-semibold text-stone-900 md:text-3xl">
          App Features
        </h4>
        <ul>
          <li className="m-3 text-sm">
            🛒 Application where user can{' '}
            <b>order one or more pizza from the menu</b>
          </li>
          <li className="m-3 text-sm">
            🛒 Requires <b>no user accounts</b> and no login: users just input
            their names before using the app.
          </li>
          <li className="m-3 text-sm">
            🛒 The Pizza menu can change, so it is <b>loaded from API</b>
          </li>
          <li className="m-3 text-sm">
            🛒 Users can add multiple Pizzas to a <b>cart</b> before ordering
          </li>
          <li className="m-3 text-sm">
            🛒 Ordering requires just the{' '}
            <b>username, phone number and address</b>
          </li>
          <li className="m-3 text-sm">
            🛒 <b>GPS location can also be provided</b> to make delivery easier
          </li>
          <li className="m-3 text-sm">
            🛒 User's can <b>mark their order as "priority"</b> for an
            additional 20% of the cart price
          </li>
          <li className="m-3 text-sm">
            🛒 Orders are made by <b>sending a post request</b> with the order
            data(user data + selected pizzas) to the API
          </li>
          <li className="m-3 text-sm">
            🛒 Payments are made on delivery, so <b>no payment processing</b> is
            implemented
          </li>
          <li className="m-3 text-sm">
            🛒 Each order will get a <b>unique ID</b> that is displayed, so the{' '}
            <b>user can look up their order</b> based on the ID
          </li>
          <li className="m-3 text-sm">
            🛒 Users can maek their order as priority order{' '}
            <b>even after it has been placed</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutApp;

function SkillList() {
  return (
    <div className="">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <button className={`${color} m-2 rounded-full px-4 py-2 font-semibold`}>
      <span>{skill}</span>
      <span className="mx-2">
        {level === 'beginner' && '🚀'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </button>
  );
}
