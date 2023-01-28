import getDocuments from './DocumnetsApi'
import Async from 'react-async'

function GetDocs () {
  <Async promiseFn={getDocuments}>
  {({ data, error, isLoading }) => {
      if (isLoading) return "Loading..."
      if (error) return `Something went wrong: ${error.message}`
      if (data) {
          return (
              <div>
                  {data.results.map(doc => {
                      return (
                          <div key={doc._id} id="title">{doc.title}</div>
                      )
                      })}
              </div>
          )}
  }}
  </Async>
}

export default GetDocs