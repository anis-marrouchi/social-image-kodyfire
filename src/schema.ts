export const concept = {
  type: "object",
  properties: {
    name: { type: "string" },
    template: {
      type: "string",
      enum: ["basic.html.template"],
    },
    fontWeight: { type: "string", enum: ["normal", 800, "bold"], default: 800 },
    fontSize: { type: "string", default: "80px" },
    title: { type: "string" },
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
export const schema = {
  type: "object",
  properties: {
    project: { type: "string" },
    name: { type: "string" },
    rootDir: { type: "string" },
    concept: conceptArray,
  },
  required: ["name"],
};
