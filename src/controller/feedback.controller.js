import { feedback } from "../model/feedback.model.js";

const submitFeedback = async (req, res) => {
  console.log("Feeback Received");

  const { username, email, message, rating } = req.body;

  console.log(username, email, message, rating);
  /* if ([username, email, message, rating].some((field) => field)) {
    return res.status(400).json({ error: "All fields reuqired" });
  } */

  try {
    const newFeedback = await feedback.create({
      username,
      email,
      message,
      rating,
    });

    return res.status(200).json({
      status: true,
      data: newFeedback,
      message: "Feedback Submitted",
    });
  } catch (error) {
    console.error("Error submitting feedback : ", error);
    return res.status(500).json({
      error: "Error submitting feedback",
    });
  }
};

export { submitFeedback };
