# Filters no Executing

I've checked all enhancers, everything works well except for Filters when it comes to `@UseFilters(FilterClassName)`. The filter does catch and works fine when using `@UseFilters(new FilterClassName())`, but this is a problem when DI needs to happen for the filter.

## Reproduction Steps

1) git clone
2) install dependencies
3) start the server
4) `curl http://localhost:3300`
5) Notice no logs saying "In the filter"

## Expected Outcome

I expect the DI to work on filters like it does for pipes, guards, and interceptors.