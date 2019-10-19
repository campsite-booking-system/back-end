class BaseSerializer<T> {
  public rows: T | T[] = [];
  public pages: any;
  public isOne: boolean;

  constructor(rows: T | T[], pages = null, isOne = false) {
    this.rows = rows;
    this.pages = pages;
    this.isOne = isOne;
  }

  public getRelations(relations: { [relation: string]: any }): { [relation: string]: any } {
    const data: any = {};

    Object.keys(relations).forEach(relation => {
      if (relation !== 'pivot' && relations[relation]) {
        const values = relations[relation];

        data[relation] = values.toJSON ? values.toJSON() : values;
      }
    });

    return data;
  }

  public addRow(row: T) {
    if (Array.isArray(this.rows)) {
      this.rows.push(row);
    }
  }
}

export = BaseSerializer;
