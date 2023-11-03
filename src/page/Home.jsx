import introImage from "../assets/images/intro.jpg";

const Home = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex my-9 gap-6">
        <div className="flex-[1] flex flex-col justify-between">
          <h1 className="text-5xl font-bold">
            Quality Cleaning <br />{" "}
            <span className="text-primary">for your home</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, totam architecto vel nisi soluta consequatur nemo
            tempore officiis sed voluptate iure exercitationem necessitatibus?
            Amet, alias!
          </p>
          <button className="btn btn-primary">Book a Service</button>
          <button className="btn btn-ghost">Read More</button>
          <div className="divider"></div>
          <div className="flex items-center gap-4">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
            </div>
            <p>Rated 5 out by our clients</p>
          </div>
        </div>

        <div className="flex-[1] h-[540px] rounded-md overflow-hidden">
          {" "}
          <img className="w-full h-full object-cover" src={introImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
