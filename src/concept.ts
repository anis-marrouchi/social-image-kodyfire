import { IConcept, ITechnology } from 'kodyfire-core';
import { join, relative } from 'path';

import { Concept as BaseConcept } from 'basic-kodyfire';
import { Engine } from './engine';
export class Concept extends BaseConcept {
  constructor(concept: Partial<IConcept>, technology: ITechnology) {
    super(concept, technology);
    this.engine = new Engine();

    // Register functions you want to use in your templates with the engine builder registerHelper method.
    this.engine.builder.registerHelper('uppercase', (value: any) => {
      return value.toUpperCase();
    });
  }

  async generate(_data: any) {
    const template = await this.engine.read(
      join(this.getTemplatesPath(), this.template.path),
      _data.template
    );

    const compiled = this.engine.compile(template, _data);

    // @ts-ignore
    await this.engine.createOrOverwriteImage(
      this.technology.rootDir,
      this.outputDir,
      this.getFilename(_data),
      compiled,
      _data.size
    );
  }

  getFilename(data: any) {
    if (data.filename) return data.filename;
    return join(
      data.outputDir,
      `${data.name}.${this.getExtension()}`
    );
  }

  getExtension() {
    return 'png';
  }

  getTemplatesPath(): string {
    return this.technology.params.templatesPath
      ? this.technology.params.templatesPath
      : relative(process.cwd(), __dirname);
  }
}
