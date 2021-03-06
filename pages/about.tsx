const About = () => {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold sm:text-3xl">About</h1>
      <p className="">
        Hi, I&apos;m Railly Hugo, <br />
      </p>
      <p className="">
        I&apos;m software engineering student at{" "}
        <a
          className="font-bold text-blue-500 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 hover:underline underline-offset-2"
          href="https://unmsm.edu.pe/"
          rel="noopener noreferrer"
          target="_blank"
        >
          UNMSM
        </a>{" "}
        from Peru.
      </p>

      <p className="">I&apos;m currently working as a Frontend Developer at</p>
    </section>
  );
};

export default About;
