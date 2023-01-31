import { Component, ViewChild } from '@angular/core';

import { FilteredDataSource } from './data-source/filtered-data-source';
import { ColumnConfig, DynamicTableComponent } from 'material-dynamic-table';
import { Product } from './product';
import { TextFilter } from './filters/text-filter/text-filter.model';
import { DateFilter } from './filters/date-filter/date-filter.model';

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'material-dynamic-table-demo';

  @ViewChild(DynamicTableComponent) dynamicTable: DynamicTableComponent;

  columns: ColumnConfig[] = [
    {
      name: 'product',
      displayName: 'Product',
      type: 'string',
    },
    {
      name: 'productdesc',
      displayName: 'Product SEC',
      type: 'string',
    },
    {
      name: 'description',
      displayName: 'Description',
      type: 'string',
    },
    {
      name: 'recievedOn',
      displayName: 'Recieved On',
      type: 'date',
    },
    {
      name: 'created',
      displayName: 'Created Date',
      type: 'date',
      options: {
        dateFormat: 'shortDate',
      },
    },
    {
      type: 'options',
    },
  ];

  data: Product[] = [
    {
      product: 'Mouse',
      productdesc: 'Mouse 123',
      description: 'Fast and wireless',
      recievedOn: new Date('2018-01-02T11:05:53.212Z'),
      created: new Date('2015-04-22T18:12:21.111Z'),
    },
    {
      product: 'Keyboard',
      productdesc: 'Keyboard 223',
      description: 'Loud and Mechanical',
      recievedOn: new Date('2018-06-09T12:08:23.511Z'),
      created: new Date('2015-03-11T11:44:11.431Z'),
    },
    {
      product: 'Laser',
      productdesc: 'Laser 323',
      description: "It's bright",
      recievedOn: new Date('2017-05-22T18:25:43.511Z'),
      created: new Date('2015-04-21T17:15:23.111Z'),
    },
    {
      product: 'Baby food',
      productdesc: 'Baby food 423',
      description: "It's good for you",
      recievedOn: new Date('2017-08-26T18:25:43.511Z'),
      created: new Date('2016-01-01T01:25:13.055Z'),
    },
    {
      product: 'Coffee',
      productdesc: 'Coffee 523',
      description: 'Prepared from roasted coffee beans',
      recievedOn: new Date('2015-04-16T23:52:23.565Z'),
      created: new Date('2016-12-21T21:05:03.253Z'),
    },
    {
      product: 'Cheese',
      productdesc: 'Cheese 623',
      description: 'A dairy product',
      recievedOn: new Date('2017-11-06T21:22:53.542Z'),
      created: new Date('2014-02-11T11:34:12.442Z'),
    },
  ];

  dataSource = new FilteredDataSource<Product>(this.data);

  clearFilters() {
    this.dynamicTable.clearFilters();
  }

  setFilter() {
    const createdColumnName = 'created';
    const appliedFilter = this.dynamicTable.getFilter(createdColumnName);
    if (!appliedFilter) {
      const filter = new DateFilter(createdColumnName);
      filter.fromDate = new Date(2015, 0, 1);
      filter.toDate = new Date(2015, 11, 31);

      this.dynamicTable.setFilter(createdColumnName, filter);
    } else {
      const columnName = 'description';
      const filter = new TextFilter(columnName);
      filter.value = 'Loud';

      this.dynamicTable.setFilter(columnName, filter);
    }
  }
}
