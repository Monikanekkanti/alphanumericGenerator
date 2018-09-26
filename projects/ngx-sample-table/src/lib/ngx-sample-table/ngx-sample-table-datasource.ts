import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


// TODO: Replace this with your own data model type
export interface NgxSampleTableItem {
  output: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: NgxSampleTableItem[] = [
  {id: 1, output: 'Number1'},
  {id: 2, output: 'Number2'},
  {id: 3, output: 'Number3'},
  {id: 4, output: 'Number4'},
  {id: 5, output: 'Number5'},
  {id: 6, output: 'Number6'},
  {id: 7, output: 'Number7'},
  {id: 8, output: 'Number8'},
  {id: 9, output: 'Number9'},
  {id: 10, output: 'Number10'},
  {id: 11, output: 'Number11'},
  {id: 12, output: 'Number12'},
  {id: 13, output: 'Number13'},
  {id: 14, output: 'Number14'},
  {id: 15, output: 'Number15'},
  {id: 16, output: 'Number16'},
  {id: 17, output: 'Number17'},
  {id: 18, output: 'Number18'},
  {id: 19, output: 'Number19asdfds'},
  {id: 20, output: 'Number20asdfads'},
];

/**
 * Data source for the NgxSampleTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class NgxSampleTableDataSource extends DataSource<NgxSampleTableItem> {
  data: NgxSampleTableItem[] = [];//EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort, data: any[]) {
    super();
    this.data = data;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<NgxSampleTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: NgxSampleTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: NgxSampleTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'output': return compare(a.output, b.output, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Output columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
