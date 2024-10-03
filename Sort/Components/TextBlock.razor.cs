using Microsoft.AspNetCore.Components;
using Sort.Shared;
using static Sort.Shared.Enums;

namespace Sort.Components
{
    public partial class TextBlock
    {
        [Parameter]
        public string? Width { get; set; }

        [Parameter]
        public EventCallback<string?> WidthChanged { get; set; }

        [Parameter]
        public string? FontSize { get; set; }

        [Parameter]
        public EventCallback<string?> FontSizeChanged { get; set; }

        [Parameter]
        public string? FontWeight { get; set; }

        [Parameter]
        public EventCallback<string?> FontWeightChanged { get; set; }

        [Parameter]
        public Enums.HorizontalAlignmentValues HorizontalAlignment { get; set; }

        [Parameter]
        public EventCallback<Enums.HorizontalAlignmentValues> HorizontalAlignmentChanged { get; set; }

        [Parameter]
        public string? Content { get; set; }

        [Parameter]
        public EventCallback<string?> ContentChanged { get; set; }

        void OnFontSizeChanged(string newValue)
        {
            FontSize = newValue;

            FontSizeChanged.InvokeAsync(newValue);
        }

        void OnWidthChanged(string newValue)
        {
            Width = newValue;

            WidthChanged.InvokeAsync(newValue);
        }

        void OnHorizontalAlignmentChanged(HorizontalAlignmentValues newValue)
        {
            HorizontalAlignment = newValue;

            HorizontalAlignmentChanged.InvokeAsync(newValue);
        }

        void OnContentChanged(string newValue)
        {
            Content = newValue;

            ContentChanged.InvokeAsync(newValue);
        }

        void OnFontWeightChanged(string newValue)
        {
            FontWeight = newValue;

            FontWeightChanged.InvokeAsync(newValue);
        }

    }
}
