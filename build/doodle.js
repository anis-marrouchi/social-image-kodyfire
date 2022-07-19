"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doodle = void 0;
const path_1 = require("path");
const doodles_1 = __importDefault(require("./assets/doodles"));
const basic_kodyfire_1 = require("basic-kodyfire");
const engine_1 = require("./engine");
class Doodle extends basic_kodyfire_1.Concept {
    constructor(concept, technology) {
        super(concept, technology);
        this.engine = new engine_1.Engine();
    }
    generate(_data) {
        return __awaiter(this, void 0, void 0, function* () {
            const template = yield this.engine.read((0, path_1.join)(this.getTemplatesPath(), this.template.path), _data.template);
            // we resolve the doodle template
            _data.doodle = (0, doodles_1.default)(_data.doodle);
            const compiled = this.engine.compile(template, _data);
            // @ts-ignore
            yield this.engine.createOrOverwriteImage(this.technology.rootDir, this.outputDir, this.getFilename(_data), compiled, _data.size);
        });
    }
    getFilename(data) {
        if (data.filename)
            return data.filename;
        return (0, path_1.join)(data.outputDir, `${data.name}.${this.getExtension()}`);
    }
    getExtension() {
        return 'png';
    }
    getTemplatesPath() {
        return this.technology.params.templatesPath
            ? this.technology.params.templatesPath
            : (0, path_1.relative)(process.cwd(), __dirname);
    }
}
exports.Doodle = Doodle;
//# sourceMappingURL=doodle.js.map