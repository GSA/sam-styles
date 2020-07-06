Tables with multiple sections can have multiple
```<tbody>``` elements but only one ```<thead>``` element.
To style the section header using:
```njk
<tr><th colspan="\{{number of columns}}">\{{header}}</th></tr>
```
