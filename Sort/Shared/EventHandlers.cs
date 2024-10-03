using Microsoft.AspNetCore.Components;

namespace Sort.Shared
{
    [EventHandler("oncustomdragstart", typeof(CustomOnDragStart), enableStopPropagation: true, enablePreventDefault: true)]
    [EventHandler("oncustomdrop", typeof(CustomOnDrop), enableStopPropagation: true, enablePreventDefault: true)]
    public static class EventHandlers
    {
    }
}
