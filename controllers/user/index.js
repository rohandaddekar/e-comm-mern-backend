import User from "../../models/user.js";

const index = async (req, res) => {
  try {
    // Extract query parameters from the request
    const {
      firstName,
      lastName,
      role,
      page = 1,
      pageSize = 10,
      sortBy = "created_at",
      sortOrder = "asc",
    } = req.query;

    // Convert page and pageSize to integers
    const pageNumber = parseInt(page);
    const limit = parseInt(pageSize);

    // empty filter object
    const filters = {};

    // filter by - firstName
    if (firstName) {
      filters.firstName = { $regex: new RegExp(`${firstName}`, "i") };
    }

    // filter by - lastName
    if (lastName) {
      filters.lastName = { $regex: new RegExp(`${lastName}`, "i") };
    }

    // filter by - role
    if (role) {
      filters.role = role;
    }

    // Calculate the number of documents to skip based on the page number and page size
    const skip = (pageNumber - 1) * limit;

    // Count the total number of users without pagination
    const totalUsers = await User.countDocuments(filters);

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalUsers / limit);

    // Sort option
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

    // final user
    const users = await User.find(filters)
      .skip(skip)
      .limit(limit)
      .sort(sortOptions);

    return res.status(200).json({
      success: true,
      message: "fetched all users successfully",
      users: users,
      pagination: {
        totalUsers: totalUsers,
        currentPage: pageNumber,
        totalPages: totalPages,
        pageSize: limit,
      },
    });
  } catch (error) {
    console.log("failed to fetch all users", error);
    return res.status(500).json({
      success: false,
      message: "failed to fetch all users",
    });
  }
};

export default index;
