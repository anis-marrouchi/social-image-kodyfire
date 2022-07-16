export declare const concept: {
    type: string;
    properties: {
        name: {
            type: string;
        };
        template: {
            type: string;
            enum: string[];
        };
        fontWeight: {
            type: string;
            enum: (string | number)[];
            default: number;
        };
        fontSize: {
            type: string;
            default: string;
        };
        title: {
            type: string;
        };
        logo: {
            type: string;
        };
        background: {
            type: string;
            default: string;
        };
        imageUrl: {
            type: string;
        };
        color: {
            type: string;
            default: string;
        };
        includeWatermark: {
            type: string;
            default: boolean;
        };
        watermark: {
            type: string;
        };
        size: {
            enum: string[];
            default: string;
        };
        outputDir: {
            type: string;
        };
    };
};
export declare const conceptArray: {
    type: string;
    items: {
        type: string;
        properties: {
            name: {
                type: string;
            };
            template: {
                type: string;
                enum: string[];
            };
            fontWeight: {
                type: string;
                enum: (string | number)[];
                default: number;
            };
            fontSize: {
                type: string;
                default: string;
            };
            title: {
                type: string;
            };
            logo: {
                type: string;
            };
            background: {
                type: string;
                default: string;
            };
            imageUrl: {
                type: string;
            };
            color: {
                type: string;
                default: string;
            };
            includeWatermark: {
                type: string;
                default: boolean;
            };
            watermark: {
                type: string;
            };
            size: {
                enum: string[];
                default: string;
            };
            outputDir: {
                type: string;
            };
        };
    };
};
export declare const schema: {
    type: string;
    properties: {
        project: {
            type: string;
        };
        name: {
            type: string;
        };
        rootDir: {
            type: string;
        };
        concept: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    template: {
                        type: string;
                        enum: string[];
                    };
                    fontWeight: {
                        type: string;
                        enum: (string | number)[];
                        default: number;
                    };
                    fontSize: {
                        type: string;
                        default: string;
                    };
                    title: {
                        type: string;
                    };
                    logo: {
                        type: string;
                    };
                    background: {
                        type: string;
                        default: string;
                    };
                    imageUrl: {
                        type: string;
                    };
                    color: {
                        type: string;
                        default: string;
                    };
                    includeWatermark: {
                        type: string;
                        default: boolean;
                    };
                    watermark: {
                        type: string;
                    };
                    size: {
                        enum: string[];
                        default: string;
                    };
                    outputDir: {
                        type: string;
                    };
                };
            };
        };
    };
    required: string[];
};