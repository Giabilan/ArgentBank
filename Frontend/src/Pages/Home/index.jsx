import Hero from "../../components/Hero";
import SingleFeature from "../../components/SingleFeature/index.jsx";
import "./style.scss";
const Home = () => {
  return (
    <>
      <Hero />
      <div className="features">
        <SingleFeature
          icon="message"
          title="You are our #1 priority"
          subtitle="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <SingleFeature
          icon="billets"
          title="More savings means higher rates"
          subtitle="The more you save with us, the higher your interest rate will be!"
        />
        <SingleFeature
          icon="securite"
          title="Security you can trust"
          subtitle="We use top of the line encryption to make sure your data and money is always safe."
        />
      </div>
    </>
  );
};

export default Home;
