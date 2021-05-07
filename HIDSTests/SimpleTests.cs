using HIDS;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace HIDSTests
{
    [TestClass]
    public class SimpleTests
    {
        private static readonly string TestURL = "http://vmhidsdev:8086/";
        private static readonly string TestTag = "GPA.TestDevice.TestTrend";

        private readonly API m_api = new API();

        public SimpleTests()
        {
            m_api.PointBucket = "test_bucket";
            m_api.TokenID = "28ExEMkCA8qZEyvrQEK4cnPC0cxrJo2iM2tAI8HIjwst504yq-3HSkjDZYCVO0zOrfmmzEbvQzOgiYLqEP9QnA==";
            m_api.Connect(TestURL);
        }

        public TestContext TestContext { get; set; }

        [TestMethod]
        public void WriteTest()
        {
            TestContext.WriteLine("Starting write...");

            Point testPoint = new Point { Tag = TestTag, Minimum = 1.0D, Maximum = 10.0D, Average = 5.0D, QualityFlags = 7u, Timestamp = DateTime.UtcNow };
            Task writeTask = m_api.WritePointsAsync(new[] { testPoint });
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
