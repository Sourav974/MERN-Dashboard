// controllers/filterController.js

const Entry = require("../Models/entry");

exports.getAllResults = async (req, res) => {
  try {
    const entries = await Entry.find();
    res.status(200).json({
      status: "success",
      results: entries.length,
      data: {
        entries,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.filterByEndYear = async (req, res) => {
  const { endYear } = req.query;

  try {
    const entries = await Entry.find({ end_year: endYear });
    res.status(200).json({
      status: "success",
      results: entries.length,
      data: {
        entries,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.filterByTopic = async (req, res) => {
  const { topic } = req.query;

  try {
    const entries = await Entry.find({ topic });
    res.status(200).json({
      status: "success",
      results: entries.length,
      data: {
        entries,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.filterBySector = async (req, res) => {
  const { sector } = req.query;

  try {
    const entries = await Entry.find({ sector });
    res.status(200).json({
      status: "success",
      results: entries.length,
      data: {
        entries,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.filterByRegion = async (req, res) => {
  const { region } = req.query;

  try {
    const entries = await Entry.find({ region });
    res.status(200).json({
      status: "success",
      results: entries.length,
      data: {
        entries,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.filterByPEST = async (req, res) => {
  const { pest } = req.query;

  try {
    const entries = await Entry.find({ pestle: pest });
    res.status(200).json({
      status: "success",
      results: entries.length,
      data: {
        entries,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.filterBySource = async (req, res) => {
  const { source } = req.query;

  try {
    const entries = await Entry.find({ source });
    res.status(200).json({
      status: "success",
      results: entries.length,
      data: {
        entries,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.filterBySWOT = async (req, res) => {
  const { swot } = req.query;

  try {
    const entries = await Entry.find({ swot });
    res.status(200).json({
      status: "success",
      results: entries.length,
      data: {
        entries,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.filterByCountry = async (req, res) => {
  const { country } = req.query;

  try {
    const entries = await Entry.find({ country });
    res.status(200).json({
      status: "success",
      results: entries.length,
      data: {
        entries,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.filterByCity = async (req, res) => {
  const { city } = await req.query;
  try {
    const entries = await Entry.find({ city });
    res.status(200).json({
      status: "success",
      results: entries.length,
      data: {
        entries,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
