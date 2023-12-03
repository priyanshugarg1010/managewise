const testimonialsList = [
  {
    name: "David",
    photo: "/david.png",
    designation: "Freelancer",
    review:
      "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
  },
  {
    name: "Sarah",
    photo: "/sarah.png",
    designation: "Project Manager",
    review:
      "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
  },
  {
    name: "Alex",
    photo: "/alex.png",
    designation: "IT Manager",
    review:
      "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
  },
  {
    name: "Emily",
    photo: "/emily.png",
    designation: "Art Director",
    review:
      "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations",
  },
  {
    name: "David",
    photo: "/david.png",
    designation: "Freelancer",
    review:
      "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
  },
  {
    name: "Sarah",
    photo: "/sarah.png",
    designation: "Project Manager",
    review:
      "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
  },
  {
    name: "Alex",
    photo: "/alex.png",
    designation: "IT Manager",
    review:
      "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
  },
  {
    name: "Emily",
    photo: "/emily.png",
    designation: "Art Director",
    review:
      "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations",
  },
];

const TestimonialCards = () => {
  return (
    <div className="relative overflow-hidden testimonial lg:w-full w-96">
      <div className="flex flex-row gap-5 mt-32  relative  w-[1300px] flex-nowrap	animate-infinite-slider ">
        {testimonialsList.map((testimonial, index) => (
          <div
            className="flex flex-col justify-between  items-center border rounded-3xl  min-w-80 h-96 relative "
            key={index}
          >
            <div className="flex p-10 min-w-80 w-80">
              <p className="text-backgroundBlack  text-xl font-semibold">
                {'"'}
                {testimonial.review}
                {'"'}
              </p>
            </div>
            <div className="flex items-center absolute bottom-0 left-0 p-8">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={testimonial.photo}
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-backgroundBlack  text-xl font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-descTextColor">{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCards;
