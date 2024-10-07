namespace Sortable.Shared
{
    public class CustomOnDragStart : EventArgs
    {
        public string? Id { get; set; }
    }

    public class CustomOnDrop : EventArgs
    {
        public string? srcId { get; set; }
        public string? targetId { get; set; }
    }
}
