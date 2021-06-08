using HIDS;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace HIDSTests
{
    [TestClass]
    public class SimpleTests
    {
        private static string TestURL = "http://192.168.112.221:8086/";
        private static string TestTag = "GPA.TestDevice.TestTrend";

        private readonly API m_api = new API();

        public SimpleTests()
        {
            m_api.PointBucket = "point_bucket";
            m_api.TokenID = "UDkd27OFOoxHOjQfgl-HcMvymA8F02-jIK-6Ozi1lrIdViyMrq114by4Nbpul0AzwEMb7EgaaZ5mdR36HhtwMQ==";
            m_api.Connect(TestURL);
        }

        public TestContext TestContext { get; set; }

        [TestMethod]
        public void WriteTest()
        {
            TestContext.WriteLine("Starting write...");
            Task writeTask = m_api.WritePointsAsync(new[] { new Point { Tag = TestTag, Minimum = 1.0D, Maximum = 10.0D, Average = 5.0D, QualityFlags = 7u, Timestamp = DateTime.UtcNow } });
            writeTask.GetAwaiter().GetResult();

            TestContext.WriteLine("Write complete.");
        }

        [TestMethod]
        public void ReadTest()
        {
            TestContext.WriteLine("Starting read...");

            Task readTask = ReadTestAsync();
            readTask.GetAwaiter().GetResult();

            TestContext.WriteLine("Read complete.");
        }

        private async Task ReadTestAsync()
        {
            static void BuildQuery(IQueryBuilder queryBuilder) => queryBuilder
                .Range("-48h")
                .FilterTags(new[] { TestTag });

            await foreach (Point point in m_api.ReadPointsAsync(BuildQuery))
                TestContext.WriteLine($"Point = {point.Tag} with Max = {point.Maximum}, Min = {point.Minimum}, Avg = {point.Average} @ {point.Timestamp}");
        }
    }
}
