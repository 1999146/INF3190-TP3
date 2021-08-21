export function sortTable(list: any[] | undefined, column:string, desc: boolean): any[] {
  return (list || []).sort((a, b) => {
      if (a[column] > b[column]) {
        return (desc) ? 1 : -1;
      }
      if (a[column] < b[column]) {
        return (desc) ? -1 : 1;
      }
      return 0;
    });
}

