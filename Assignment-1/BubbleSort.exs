defmodule BubbleSort do
  def sort(list) do
    len = length(list)

    for i <- 0..len-1 do
      swapped = false

      for j <- 0..(len-i-2) do
        if list[j] > list[j+1] do
          temp = list[j]
          list[j] = list[j+1]
          list[j+1] = temp
          swapped = true
        end
      end

      if not swapped do
        break
      end
    end

    list
  end
end

IO.inspect BubbleSort.sort([5, 3, 8, 4, 2])
