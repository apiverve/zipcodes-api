using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.ZipCodesLookup
{
    /// <summary>
    /// Query options for the Zip Codes Lookup API
    /// </summary>
    public class ZipCodesLookupQueryOptions
    {
        /// <summary>
        /// The zip code for which you want to get the data
        /// </summary>
        [JsonProperty("zip")]
        public string Zip { get; set; }

        /// <summary>
        /// A second US ZIP code; adds a distance object with the straight-line distance between the two ZIP centroids
        /// </summary>
        [JsonProperty("distanceTo")]
        public string DistanceTo { get; set; }
    }
}
