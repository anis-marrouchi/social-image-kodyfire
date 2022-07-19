"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.doodleArray = exports.conceptArray = exports.concept = exports.doodle = void 0;
exports.doodle = {
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
};
exports.concept = {
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
exports.conceptArray = {
    type: "array",
    items: exports.concept,
};
exports.doodleArray = {
    type: "array",
    items: exports.doodle,
};
exports.schema = {
    type: "object",
    properties: {
        project: { type: "string" },
        name: { type: "string" },
        rootDir: { type: "string" },
        concept: exports.conceptArray,
        doodle: exports.doodleArray,
    },
    required: ["name"],
};
//# sourceMappingURL=schema.js.map