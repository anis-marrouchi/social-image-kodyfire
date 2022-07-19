export const doodle = {
  type: "object",
  properties: {
    name: { type: "string" },
    template: {
      type: "string",
      enum: [
        "doodle.html.template",
        "article.html.template"
      ],
    },
    fontWeight: { type: "string", enum: ["normal", "medium", "bold"], default: "medium" },
    fontSize: { type: "string", default: "80px" },
    title: { type: "string" },
    subtitle: { type: "string" },
    eyebrow: { type: "string" },
    logo: { type: "string" },
    background: { type: "string", default: "#fff" },
    doodle: { enum: ["unicode", "neon", "strings", "fakeBox", "tubes", "timeTravel", "seeding"] },
    color: { type: "string", default: "#000" },
    includeWatermark: { type: "boolean", default: true },
    watermark: { type: "string" },
    size: { enum: [
      "facebook",
      "twitter"
    ], default: "twitter" },
    outputDir: { type: "string" },
  },
}
export const concept = {
  type: "object",
  properties: {
    name: { type: "string" },
    template: {
      type: "string",
      enum: [
        "basic.html.template",
        "article.html.template",
        "fiftyfifty.html.template",
      ],
    },
    fontWeight: { type: "string", enum: ["normal", "medium", "bold"], default: "medium" },
    fontSize: { type: "string", default: "80px" },
    title: { type: "string" },
    subtitle: { type: "string" },
    eyebrow: { type: "string" },
    logo: { type: "string" },
    background: { type: "string", default: "#fff" },
    imageUrl: { type: "string" },
    color: { type: "string", default: "#000" },
    includeWatermark: { type: "boolean", default: true },
    watermark: { type: "string" },
    size: { enum: [
      "facebook",
      "twitter"
    ], default: "twitter" },
    outputDir: { type: "string" },
  },
};

export const conceptArray = {
  type: "array",
  items: concept,
};

export const doodleArray = {
  type: "array",
  items: doodle,
};

export const schema = {
  type: "object",
  properties: {
    project: { type: "string" },
    name: { type: "string" },
    rootDir: { type: "string" },
    concept: conceptArray,
    doodle: doodleArray,
  },
  required: ["name"],
};
